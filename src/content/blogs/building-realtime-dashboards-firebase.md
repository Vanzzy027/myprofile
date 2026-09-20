---
title: Building Realtime Dashboards with Firebase and React
date: 2025-02-10
tags: [Firebase, React, IoT, Web]
---

# Building Realtime Dashboards with Firebase and React

Firebase Realtime Database makes it trivial to push IoT sensor readings to a web dashboard without polling.

## Architecture
```
ESP32 → Firebase Realtime DB → React (onValue listener) → Chart.js
```

## Setting Up Firebase

1. Create a project at console.firebase.google.com
2. Enable Realtime Database
3. Copy your config object

## React Hook for Live Data
```ts
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export function useSensorData(path: string) {
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    const r = ref(db, path);
    return onValue(r, (snap) => {
      setData((prev) => [...prev.slice(-19), snap.val()]);
    });
  }, [path]);
  return data;
}
```

This hook streams live readings and keeps the last 20 data points for charting.