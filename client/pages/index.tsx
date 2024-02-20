import React from "react";
import Router from "next/router";

import { DISALLOW_ANONYMOUS_LINKS } from "../consts";
import NeedToLogin from "../components/NeedToLogin";
import Extensions from "../components/Extensions";
import LinksTable from "../components/LinksTable";
import AppWrapper from "../components/AppWrapper";
import Shortener from "../components/Shortener";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useStoreState } from "../store";

const Homepage = () => {
    Router.push("/login");
    return null;
  }
};

export default Homepage;
