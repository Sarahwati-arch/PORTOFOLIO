export default function BackToTop({ visible, onClick }) {
  return (
    <div
      className={`back-to-top${visible ? " active" : ""}`}
      onClick={onClick}
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}
