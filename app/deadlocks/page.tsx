export const metadata = {
  title: 'Deadlocks | The Typewriter OS Compendium',
  description: 'Deadlock conditions, detection, prevention, and Banker?s algorithm with a safety test by hand.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="deadlock-title">
      <header>
        <h1 id="deadlock-title">Deadlocks ? When Everyone Waits for Everyone</h1>
        <p className="muted">Mental picture: four hands holding each other?s typewriter ribbons in a square.</p>
      </header>

      <section>
        <h2>Coffman Conditions (all four needed)</h2>
        <ul>
          <li><b>Mutual Exclusion</b></li>
          <li><b>Hold and Wait</b></li>
          <li><b>No Preemption</b></li>
          <li><b>Circular Wait</b></li>
        </ul>
        <p>Break any one to prevent deadlocks.</p>
      </section>

      <section>
        <h2>Banker?s Algorithm ? Safety Check (Worked)</h2>
        <p>Single resource type with total R=10. Three processes:</p>
        <ul>
          <li>P1: Max=7, Alloc=3</li>
          <li>P2: Max=5, Alloc=2</li>
          <li>P3: Max=3, Alloc=2</li>
        </ul>
        <p>Available A = 10 ? (3+2+2) = 3. Need = Max ? Alloc ? N1=4, N2=3, N3=1.</p>
        <p>Sequence trial: Can we satisfy someone now?</p>
        <ul>
          <li>P3: Need=1 ? A=3 ? run P3, finish, release 2 ? A=5</li>
          <li>Now P2: Need=3 ? 5 ? run P2, release 2 ? A=7</li>
          <li>Now P1: Need=4 ? 7 ? run P1, release 3 ? A=10</li>
        </ul>
        <p><b>Safe sequence</b>: P3, P2, P1. Therefore the state is safe.</p>
      </section>

      <section>
        <h2>Detection</h2>
        <p>Build Wait-For Graph (one edge per wait). A cycle implies deadlock for single-instance resources. For
          multiple instances, run a Banker-like check to see who can finish with current available.</p>
      </section>

      <section>
        <h2>Prevention vs Avoidance</h2>
        <ul>
          <li><b>Prevention</b>: break a Coffman condition (e.g., impose a total resource order to kill cycles).</li>
          <li><b>Avoidance</b>: use Banker?s online safety test before granting a request.</li>
        </ul>
      </section>
    </article>
  );
}
