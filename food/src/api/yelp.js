import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Lji_tK-6ZQNxXGdNNNDOXwsMeASIZ_jjnlacw2D3Q4l3rAQAN7VQutzu1DwVxI8rQn2T7JUT_edGsYbZVE7JNJNWxDTlsgFQ2F37JIypq-1YoKvyEVYg2efQ6GUZZHYx",
  },
});
