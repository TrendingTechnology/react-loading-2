import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Skeleton from "../src/Skeleton";
import { colors } from "../src/Skeleton.styles";

const TEST_ID = "skeleton__item";

const testForBaseStyle = element => {
  expect(element).toHaveStyle(`
    display: block;
    margin: 0 0 4px 0;
    background-color: ${colors.base};
    background-image: linear-gradient(
      90deg,
      ${colors.base},
      ${colors.highlight},
      ${colors.base}
    );
    background-size: 220px 100%;
    background-repeat: no-repeat;
    line-height: 1.5;
    min-height: 16px;
  `);
};

describe("Skeleton", () => {
  afterEach(cleanup);

  describe("Basic", () => {
    it("should render a skeleton with correct default style", () => {
      const { getByTestId } = render(<Skeleton />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
    });
  });

  describe("Height", () => {
    it("should render a skeleton with correct height in pixel if height is provided in number", () => {
      const { getByTestId } = render(<Skeleton height={20} />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`height: 20px;`);
    });

    it("should render a skeleton with correct height if height is provided in string", () => {
      const { getByTestId } = render(<Skeleton height="3rem" />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`height: 3rem;`);
    });

    it("should render a skeleton with default height of 100% if height is not provided", () => {
      const { getByTestId } = render(<Skeleton />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`height: 100%;`);
    });
  });

  describe("Width", () => {
    it("should render a skeleton with correct width in pixel if width is provided in number", () => {
      const { getByTestId } = render(<Skeleton width={20} />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`width: 20px;`);
    });

    it("should render a skeleton with correct width if width is provided in string", () => {
      const { getByTestId } = render(<Skeleton width="3rem" />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`width: 3rem;`);
    });

    it("should render a skeleton with default width of 100% if width is not provided", () => {
      const { getByTestId } = render(<Skeleton />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`width: 100%;`);
    });
  });

  describe("Circle", () => {
    it("should render a skeleton with correct border radius if circle is true", () => {
      const { getByTestId } = render(<Skeleton width={20} circle />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`
        border-radius: 50%;
      `);
    });

    it("should render a skeleton with height same as width id width is provided", () => {
      const { getByTestId } = render(<Skeleton circle width={30} />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`
        width: 30px;
        height: 30px;
      `);
    });

    it("should render a skeleton with same width same as height if height is priovided", () => {
      const { getByTestId } = render(<Skeleton circle height={30} />);
      const element = getByTestId(TEST_ID);

      expect(element).toBeTruthy();
      testForBaseStyle(element);
      expect(element).toHaveStyle(`
        width: 30px;
        height: 30px;
      `);
    });
  });

  describe("Rows", () => {
    it("should render a correct number of row skeleton if rows is provided", () => {
      const { getAllByTestId } = render(<Skeleton width={20} rows={5} />);
      const elements = getAllByTestId(TEST_ID);

      expect(elements).toHaveLength(5);
    });
  });
});
