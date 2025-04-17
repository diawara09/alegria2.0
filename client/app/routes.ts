import { type RouteConfig, index, layout,route } from "@react-router/dev/routes";

export default [layout("./routes/layout.tsx", [index("routes/home.tsx"),
    route("payment", "./routes/payment.tsx"),
    route("about", "./routes/about.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("team", "./routes/team.tsx")
]) ] satisfies RouteConfig;
