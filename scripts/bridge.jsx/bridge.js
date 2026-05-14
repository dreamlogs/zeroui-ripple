// ZeroUI: AE Data Bridge
// Reads coordinates from the data/coords.json file
var dataFile = File("~/Documents/zeroui-ripple/data/coords.json");

if (dataFile.exists) {
    dataFile.open("r");
    var content = dataFile.read();
    dataFile.close();
    
    var pos = JSON.parse(content);
    // Maps the ESP32 data to your 1080x566 composition
    [pos.x, pos.y]; 
} else {
    [540, 283]; // Default to center if hardware isn't connected
}