import { Layout } from "@components/Layout";
import { SectionContainer } from "@components/Section";
import React from "react";
import VideoPlayer from "../components/Video/VideoPlayer";
import SearchBar from "../components/SearchBar/SearchBar";
import TextBox from "../components/TextBox/TextBox";
/*comment */
export default function Product() {
    return (
        <Layout>
            <SectionContainer className="main-wrapper wrap wrap-px grid gap-16">
                <SectionContainer className="wrap warp wrap">
                    <div className="flex justify-between">
                        <div className="flex-1">
                            <VideoPlayer />
                        </div>
                        <div className="flex-1">
                            <SearchBar />
                        </div>
                        <div className="flex-1">
                            <TextBox />
                        </div>
                    </div>
                </SectionContainer>
            </SectionContainer>
        </Layout>
    );
}
