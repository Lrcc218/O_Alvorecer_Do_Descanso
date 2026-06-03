import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#0A1128",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#D4AF37",
        borderRadius: "50%",
      }}
    >
      A
    </div>,
    { ...size },
  );
}
