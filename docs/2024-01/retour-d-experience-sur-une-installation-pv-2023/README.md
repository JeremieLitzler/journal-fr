---
title: "Installation PV - quel retour d'expérience en 2023 ?"
description: ""
date: 2024-01-20
category:
  - Energie

---

:::echarts La production 2022 (en bleu) vs la production 2023 (en vert) avec l'injection réseau (rouge en 2022 vs jaune en 2023)

```json
{
  "xAxis": {
    "type": "category",
    "data": [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Jui",
      "Jul",
      "Aou",
      "Sep",
      "Oct",
      "Nov",
      "Déc"
    ]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "data": [ 0, 0, 17.3, 160.6, 210.4, 204.3, 225.4, 192.7, 150.9, 109.3, 62.6, 36.3 ],
      "type": "line",
      "name": "Production 2022"
    },
    {
      "data": [44.6, 113.7, 135.2, 147.5, 169.2, 190.4, 207.22, 185.28, 171.26, 113.94, 69.70, 49.00],
      "type": "line",
      "name": "Production 2023"
    },
    {
      "data": [0, 0, 10, 13, 24, 21, 21, 38, 3, 1, 1, 1],
      "type": "bar",
      "name": "Production injectée 2022"
    },
    {
      "data": [1, 1, 4, 1, 9, 2, 4, 66, 2, 2, 1, 0],
      "type": "bar",
      "name": "Production injectée 2023"
    }
  ]
}
```

:::
