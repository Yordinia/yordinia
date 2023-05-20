# What is API
- Application Programming Interface
- Two computers talking to eachother > create an interface for my applications
- forEg. I am a newspaper > let other apps have access to all news > or an image db
    - There could be authentication
    - limited No of request
    - Provide parameters to get the right data back
- Prev project > fetch a CSV(tabular data of world weather) and graph it using chart.JS. This is local = image or CSV file. API is external (data on the web).

# Fetch API [GET, POST]
URL = 'HTTPS://REQRES.IN/API/USERS'

- fetch(URL, [OPTIONS] )> returns Promise
- .then(res => console.log(res)) >> thie returns the Response Obj {body:(...),headers:headers{}, ok: true, status: 200 .. url: https://reqres.in/api.users}
- .then(data => console.log('this would be the body', data))

- 
