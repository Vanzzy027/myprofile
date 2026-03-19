---
title: Getting Started with ESP32 and MQTT
date: 2025-01-20
tags: [IoT, ESP32, MQTT, Tutorial]
---

# Getting Started with ESP32 and MQTT

MQTT (Message Queuing Telemetry Transport) is a lightweight protocol perfect for IoT devices with limited bandwidth. In this guide, we connect an ESP32 to a public MQTT broker and stream temperature data.

## What You'll Need

- ESP32 development board
- DHT22 temperature & humidity sensor
- Arduino IDE or PlatformIO
- A free HiveMQ Cloud account (MQTT broker)

## Wiring the DHT22

Connect the DHT22 data pin to GPIO4, VCC to 3.3V, and GND to GND.

## The Firmware
```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

const char* ssid     = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";
const char* mqtt_server = "broker.hivemq.com";

DHT dht(4, DHT22);
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(ssid, password);
  client.setServer(mqtt_server, 1883);
}

void loop() {
  float temp = dht.readTemperature();
  String payload = String(temp);
  client.publish("evanson/sensor/temp", payload.c_str());
  delay(5000);
}
```

Flash this to your ESP32 and watch the data flow!