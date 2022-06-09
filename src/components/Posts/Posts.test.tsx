import Posts from "./Posts";
import { render, cleanup } from "@testing-library/react";
import { Photo } from "../App/appTypes";

const photosOne: Photo[] = [
  {
    id: 1,
    url: "Some url one",
  },
];

const photosTwo: Photo[] = [
  {
    id: 1,
    url: "Some url one",
  },
  {
    id: 2,
    url: "Some url two",
  },
];

afterEach(cleanup);

describe("Posts", () => {
  it("test Posts to render correctly when props change", () => {
    const { rerender, getAllByTestId } = render(<Posts photos={photosOne} />);
    expect(getAllByTestId("post")).toHaveLength(photosOne.length);
    rerender(<Posts photos={photosTwo} />);
    expect(getAllByTestId("post")).toHaveLength(photosTwo.length);
  });
});
