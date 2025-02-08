function getElementWidth(content, padding, border) {
  // Видаляємо 'px' і перетворюємо значення на числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Загальна ширина елемента з урахуванням border-box
  return contentWidth + 2 * (paddingWidth + borderWidth);
}

// Перевірка коректності роботи функції
console.log(getElementWidth('50px', '8px', '4px')); // Очікуваний результат: 74
console.log(getElementWidth('60px', '12px', '8.5px')); // Очікуваний результат: 101
console.log(getElementWidth('200px', '0px', '0px')); // Очікуваний результат: 200
