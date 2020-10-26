import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

// *** calculateTotalPrice ***
test('should calculate total Price', () => {
  const movie = new Movie(1, 'Movie Name', 100, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const movie2 = new Movie(2, 'Movie Name 2', 150, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const book = new Book(3, 'Book name', 'Book author', 99, 1);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie2);
  cart.add(book);
  expect(cart.calculateTotalPrice()).toBe(100 + 150 + 99);
});

// *** calculatePriceWithDiscount ***
test('should calculate price with discount', () => {
  const movie = new Movie(1, 'Movie Name', 100, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const movie2 = new Movie(2, 'Movie Name 2', 150, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const book = new Book(3, 'Book name', 'Book author', 99, 1);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie2);
  cart.add(book);
  expect(cart.calculatePriceWithDiscount(10)).toBe((100 + 150 + 99) * 0.9);
});

test('price with 0 discount shuld be full price', () => {
  const movie = new Movie(1, 'Movie Name', 100, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const movie2 = new Movie(2, 'Movie Name 2', 150, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const book = new Book(3, 'Book name', 'Book author', 99, 1);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie2);
  cart.add(book);
  expect(cart.calculatePriceWithDiscount(0)).toBe((100 + 150 + 99));
});

test('price with 100 discount shuld be zero', () => {
  const movie = new Movie(1, 'Movie Name', 100, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const movie2 = new Movie(2, 'Movie Name 2', 150, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 1);
  const book = new Book(3, 'Book name', 'Book author', 99, 1);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie2);
  cart.add(book);
  expect(cart.calculatePriceWithDiscount(0)).toBe((100 + 150 + 99));
});

test('shuold throw error if discount above 100', () => {
  const cart = new Cart();
  expect(() => {
    const test = cart.calculatePriceWithDiscount(101);
  }).toThrowError('Скидка может быть от 0 до 100');
});

test('shuold throw error if discount above 100', () => {
  const cart = new Cart();
  expect(() => {
    const test = cart.calculatePriceWithDiscount(110);
  }).toThrowError('Скидка может быть от 0 до 100');
});

test('shuold throw error if discount less 0', () => {
  const cart = new Cart();
  expect(() => {
    const test = cart.calculatePriceWithDiscount(-1);
  }).toThrowError('Скидка может быть от 0 до 100');
});

test('shuold throw error if discount less 0', () => {
  const cart = new Cart();
  expect(() => {
    const test = cart.calculatePriceWithDiscount(-50);
  }).toThrowError('Скидка может быть от 0 до 100');
});

// *** remove ***
test('shuold remove element', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book name', 'Book author', 99, 99);
  cart.add(book);
  cart.remove(1);
  expect(cart.items.length).toBe(0);
});

test('remove shuold return true if removed', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book name', 'Book author', 99, 99);
  cart.add(book);
  expect(cart.remove(1)).toBe(true);
});

test('remove shuold return false if not found', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book name', 'Book author', 99, 99);
  cart.add(book);
  expect(cart.remove(2)).toBe(false);
});