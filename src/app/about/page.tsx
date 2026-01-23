export const metadata = {
  title: "About Us | The SSA Project",
  description: "Learn about The SSA Project's mission and team.",
};

export default function AboutPage() {
  return (
    <main className="about">
      <section className="about-content">
        <h1 className="about-title">About Us</h1>
        <p style={{ whiteSpace: "pre-line" }}>
          {`OUR VISION IS YOUR EVERLASTING DREAM
SINCE 2021, THE SSA PROJECT HAS EXISTED TO CREATE PIECES
THAT FEEL DIFFERENT. WE COME FROM THE UNDER-
GROUND—WHERE HONESTY MATTERS MORE THAN TRENDS—AND
WE APPLY THAT MINDSET TO EVERYTHING WE MAKE. WE FOCUS
ON FLAWLESS DESIGN, REAL MATERIALS, AND LONG-LASTING
QUAILTY.
THE PROJECT`}
        </p>
      </section>
    </main>
  );
}
