/** Fine stone grain and soft vignette. Purely CSS; see globals.css. */
export function StoneTexture({ vignette = true }: { vignette?: boolean }) {
  return (
    <>
      <div className="stone-grain" aria-hidden="true" />
      {vignette && <div className="stone-vignette" aria-hidden="true" />}
    </>
  );
}
