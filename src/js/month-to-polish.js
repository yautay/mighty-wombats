function monthToPolish(num) {
  if (isNaN(num))
    return undefined;
  const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];
  return monthNames[--num];
}

export { monthToPolish };
