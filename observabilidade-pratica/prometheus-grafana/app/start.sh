#!/bin/bash

java -Dspring.profiles.active=prod -Xms128M -Xmx128M -XX:MaxMetaspaceSize=128m -jar target/forum.jar