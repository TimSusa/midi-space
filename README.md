# MIDI SPACE
- Central running MIDI Server Backend Service
- Could be inspected via browser 
- Connects via Websockets 
- Broadcasts Server Sent Events
- Modular structure

``` 
http://$IP:$PORT
``` 

# Platforms
- Raspi400 64Bit
- Mac OSX
- Win?

# Install 
``` 
npm i
``` 

# Run
``` 
npm start
``` 

# Endpoints
## Virtual Keyboard
- Open the browser and put in this url:
``` 
http://localhost:8080/keyboard
``` 

# Midi Driver

## Available Inputs
``` 
GET $hostname:PORT/drivers/inputs
``` 

## Active Input
``` 
GET $hostname:PORT/drivers/input
``` 

## Available Outpus
``` 
GET $hostname:PORT/drivers/outputs
``` 

## Active Output
``` 
GET $hostname:PORT/drivers/output
``` 

# Credits to 
- https://github.com/justinlatimer/node-midi
- https://github.com/Pomax/midi-with-node