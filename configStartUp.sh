#!/bin/sh
# grabs all inet lines and sends them to ouput file
ifconfig | grep inet > grep_output.txt

# sets variable line to the 5th line down
line=$(head -5 grep_output.txt  | tail -1)

#Setting the ip address
ip=`echo $line | cut -b 6-16`
echo IP: $ip is ready

# Filling a config file with the ip address
echo "apiUrl={apiUrl:\"$ip:3001\"};" > localConfig.js
echo "module.exports=apiUrl" >> localConfig.js

#deleting the grep_output file from the initial command
rm -r grep_output.txt

# To have script continue and start server
# cd Server
#n odemon server.js &

# running this script as a daemon thread
# setsid configStartUp.sh >/dev/null 2>&1 < /dev/null &

# To kill this daemon thread
# kill $(ps -fade | grep myscript.sh | grep -v grep | awk '{print $2}')
