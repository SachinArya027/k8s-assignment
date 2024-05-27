# use this script to test the HPA in action
# make sure you have installed apache2-utils
# this will overload the server with multiple concurrent requests
# and will result in increasing the cpu usage
ab -n 200 -c 100 http://localhost:8080/extraload