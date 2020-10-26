import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('should create Movie', () => {
  const movie = new Movie(1, 'Movie Name', 10, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 100);
  expect(movie.name).toBe('Movie Name');
})
test('should add Movie to Cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Name', 10, 2020, 'RUS', 'Слоган', ['Жанр1', 'Жанр2'], 100);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
})