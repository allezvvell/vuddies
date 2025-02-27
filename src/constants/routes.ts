const ROUTES = {
  home: '/',
  signIn: '/signin',
  signUp: '/signup',
  mypage: '/user/mypage',
  meetups: '/meetups',
  meetup: (meetupId: string) => `/meetup/${meetupId}`,
  volunteers: '/volunteers',
  volunteer: (volunteerId: string) => `/volunteer/${volunteerId}`,
  chats: '/chats',
  chat: (chatId: string) => `/chat/${chatId}`,
  reviews: '/reviews',
  review: (reviewId: string) => `/review/${reviewId}`,
} as const;

export default ROUTES;
