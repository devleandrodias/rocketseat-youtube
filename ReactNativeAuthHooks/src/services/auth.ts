interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export const singIn = (): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjNiYzY3Y2U4LWQxN2UtNDI5Ni05M2FlLTQ4NTRjYmY5YjhjYiIsImlhdCI6MTU5NTU1OTE1OSwiZXhwIjoxNTk1NTYyNzU5fQ.5ZvLMPBCWBCJdG_X8RvOc52kzPKI9PJxTtp7_eLBQuE',
        user: {
          name: 'Leandro',
          email: 'leandro@rocketseat.com.br',
        },
      });
    }, 2000);
  });
};
