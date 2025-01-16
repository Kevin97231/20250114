import { WithoutUseMemo } from "../components/WithoutUseMemo";
import { WithUseMemo } from "../components/WithUseMemo";

export const HookUseMemo = () => {
  return (
    <section className="pt-20">
      <h1>Le hook useMemo</h1>

      <WithUseMemo />
      <WithoutUseMemo />
    </section>
  );
};
