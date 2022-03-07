// export const apiUrl = 'https://munasabat-app-backend.herokuapp.com';
export const apiUrl = 'https://lac-fitness-backend.herokuapp.com';
// export const apiUrl = 'https://64c2-119-155-153-170.ngrok.io';
export const imageUrl = `${apiUrl}/api/images`;

export const URL = link => {
  return `${apiUrl}/api/v1/${link}`;
};

export default function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const stripeKey =
  'pk_test_51J6GopJgrefmqo19p8Q09Td5DK3VGXXBxO0rZIZR4issnMtWLFY1HUfATJQnHOoqkxUkRQG2ig9Pjyqu7AcZtfxX00eIdpdjD3';
