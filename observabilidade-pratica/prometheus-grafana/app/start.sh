#!/bin/bash

java -jar -Xms128M -Xmx128M -XX:MaxMetaspaceSize=128m -Dspring.profiles.active=prod target/forum.jar