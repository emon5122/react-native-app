import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const DynamicSvgLoader = ({ link }: { link: string }) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(link);
                const data = await response.text();
                setSvgContent(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching SVG:", error);
                setLoading(false);
            }
        };

        fetchSvg();
    }, [link]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <>
            {svgContent ? (
                <SvgXml xml={svgContent} />
            ) : (
                <Text>Failed to load SVG</Text>
            )}
        </>
    );
};

export default DynamicSvgLoader;
