import { render, cleanup } from "@testing-library/react";
import axios from "axios";
import App from "./App";
import { Photos } from "./appTypes";

interface ResponseType {
  data: Photos;
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
  config: Record<string, unknown>;
}

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);

describe("test App", () => {
  let response: ResponseType;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          url: "https://via.placeholder.com/600/92c952",
        },
      ],
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    };
  });

  it("renders App component", async () => {
    mockedAxios.get.mockResolvedValueOnce(response);
    const { findByTestId } = render(<App />);
    const posts = await findByTestId("posts");
    expect(posts).toBeInTheDocument();
  });
});
