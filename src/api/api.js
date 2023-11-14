function mockFetch(data) {
    console.log(data);
    return Promise.resolve({
        json: () => Promise.resolve(data),
        ok: true,
    });
}

export{
    mockFetch
}