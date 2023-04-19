import ThemeContainer from "../contexts/theme/theme-container";

export default function SkyLab({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}
