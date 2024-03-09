import React from "react";
import Sidebar from "../ui/sidebar";
import Heading from "../ui/heading";

export default function TyrePage() {
    return (
        <main className="flex">
            <Sidebar />
            <div className="flex w-full h-full">
                <Heading />
            </div>
        </main>
    );
}