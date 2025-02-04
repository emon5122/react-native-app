import renderer from "react-test-renderer";
import { Header } from "../header";

describe("Header", () => {
    it("renders header content correctly on Game Board & News", () => {
        const tree = renderer.create(<Header path="/" />).toJSON();
        expect(tree).not.toBeNull();
        const tree2 = renderer.create(<Header path="/news" />).toJSON();
        expect(tree2).not.toBeNull();
    });
    it("does not render when the path is /chat", () => {
        const tree = renderer.create(<Header path="/chat" />).toJSON();
        expect(tree).toBeNull();
    });
});
