# MIDI SPACE
- Central running MIDI Server Backend Service
- Could be inspected via browser 
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
- Open browser:

``` 
http://localhost:8080
``` 

# Midi Driver

## Available Inputs
``` 
http://localhost:8080/drivers/inputs
``` 

## Available Outpus
``` 
http://localhost:8080/drivers/outputs
``` 

# Credits to 
- https://github.com/justinlatimer/node-midi
- https://github.com/Pomax/midi-with-node