export const getReqBackend = async (route) => {
  //GET REQ
  try {
    const res = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
