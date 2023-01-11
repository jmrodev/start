from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

# Entidad user


class User(BaseModel):
    id: int
    name: str
    surname: str
    url: str
    age: int


users_list = [User(id=1, name="name1", surname="surname1", url="url1", age=25),
              User(id=2, name="name2", surname="surname2", url="url2", age=54),
              User(id=3, name="name3", surname="surname3", url="url3", age=43),
              User(id=4, name="name4", surname="surname4", url="url4", age=23)]


@app.get("/usersjson")
async def usersjson():
    return [{"name": "name1", "surname": "surname1", "url": "url1", "age": 25},
            {"name": "name1", "surname": "surname1", "url": "url1", "age": 25},
            {"name": "name1", "surname": "surname1", "url": "url1", "age": 25},
            {"name": "name1", "surname": "surname1", "url": "url1", "age": 25}]


@app.get("/users")
async def users():
    return users_list


# Path
@app.get("/user/{id}")
async def user(id: int):
    # como lo que sigue es igual en ambos get podemos crear y llamar a una funcion
    return search_user(id)
    """ users = filter(lambda user: user.id == id, users_list)
    try:
        return list(users)[0]
    except:
         return {"error":"Usuario no valido"}  """


# Query
@app.get("/user/")
async def user(id: int):
    return search_user(id)
    """  users = filter(lambda user: user.id == id, users_list)
    try:
        return list(users)[0]
    except:
        return {"error":"Usuario no valido"} """


@app.post("/user/")
async def user(user: User):
    if type(search_user(user.id)) == User:
        return {"error": "El usuario ya existe"}

    users_list.append(user)
    return user


@app.put("/user/")
async def user(user: User):

    found = False

    for index, save_user in enumerate(users_list):
        if save_user.id == user.id:
            users_list[index] = user
            found = True

    if not found:
        return {"error": "Usuario no se actualizo"}

    return user


@app.delete("/user/{id}")
async def user(id: int):

    found = False

    for index, save_user in enumerate(users_list):
        if save_user.id == id:
            del users_list[index]
            found = True
            return {"usuario eliminado"}

    if not found:
        return {"error": "No se elimino el usuario"}


def search_user(id: int):
    users = filter(lambda user: user.id == id, users_list)
    try:
        return list(users)[0]
    except:
        return {"error": "Usuario no encontrado"}
