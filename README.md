# paginate demo

### ab test result

  ab -n 2000 -c 250 http://localhost:3000/h

hello world 

 - 3000~4000 rps

with db query (ab -n 1000 -c 200 http://localhost:3000/user?name=wade)

 - 600~850 rps

hardware :2016 RMBP
