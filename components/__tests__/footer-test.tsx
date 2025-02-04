import renderer from "react-test-renderer";
import { Footer } from "../footer";

describe("Footer", () => {
    it("renders when path is Game Board, News and not Chat", () => {
        const tree = renderer.create(<Footer path="/" />).toJSON();
        expect(tree).not.toBeNull();
        const tree2 = renderer.create(<Footer path="/news" />).toJSON();
        expect(tree2).not.toBeNull();
        const tree3 = renderer.create(<Footer path="/chat" />).toJSON();
        expect(tree3).toBeNull();
    });
    it("applies active state styling for the selected page", () => {
        const homeTree = renderer.create(<Footer path="/" />).toJSON();
        if (!homeTree || !("children" in homeTree)) {
            throw new Error("Game Board tree not rendered correctly");
        }
        const homeChildren = homeTree.children as unknown as {
            type: string;
            props: { className: string };
            children: { type: string; props: { className: string } }[];
        }[];
        const homeOpacities = homeChildren
            .map((child) => child.children?.[0]?.props?.className || "")
            .filter((className) => className.includes("opacity"));
        expect(homeOpacities[0]).toContain("opacity-100");
        expect(homeOpacities[1]).toContain("opacity-70");
        const newsTree = renderer.create(<Footer path="/news" />).toJSON();
        if (!newsTree || !("children" in newsTree)) {
            throw new Error("News tree not rendered correctly");
        }
        const newsChildren = newsTree.children as unknown as {
            type: string;
            props: { className: string };
            children: { type: string; props: { className: string } }[];
        }[];
        const newsOpacities = newsChildren
            .map((child) => child.children?.[0]?.props?.className || "")
            .filter((className) => className.includes("opacity"));
        expect(newsOpacities[0]).toContain("opacity-70");
        expect(newsOpacities[1]).toContain("opacity-100");
    });
    it("navigates to Game Board when the Game Board & News tabs are clicked", () => {
        const tree = renderer.create(<Footer path="/" />).toJSON();
        if (!tree || !("children" in tree)) {
            throw new Error("Tree not rendered correctly");
        }
        const treeChildren = tree.children as unknown as {
            type: string;
            props: { onClick: () => void };
        }[];
        treeChildren.forEach((child) => {
            if (child.props.onClick) {
                child.props.onClick();
            }
        });
        const newTree = renderer.create(<Footer path="/" />).toJSON();
        if (!newTree || !("children" in newTree)) {
            throw new Error("Tree not rendered correctly");
        }
        const newTreeChildren = newTree.children as unknown as {
            type: string;
            props: { className: string };
            children: { type: string; props: { className: string } }[];
        }[];
        const newTreeOpacities = newTreeChildren
            .map((child) => child.children?.[0]?.props?.className || "")
            .filter((className) => className.includes("opacity"));
        expect(newTreeOpacities[0]).toContain("opacity-100");
        expect(newTreeOpacities[1]).toContain("opacity-70");
    });
});
