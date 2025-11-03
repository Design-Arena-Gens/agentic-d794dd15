export const metadata = {
  title: 'Synchronization | The Typewriter OS Compendium',
  description: 'Critical section, Peterson?s, semaphores, monitors, and classic problems ? with intuition.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="sync-title">
      <header>
        <h1 id="sync-title">Synchronization ? Ordering Chaos Without Raising Your Voice</h1>
        <p className="muted">Mental picture: two reporters reaching for the same carriage return. Rules keep fingers intact.</p>
      </header>

      <section>
        <h2>The Critical Section Problem</h2>
        <ul>
          <li><b>Mutual Exclusion</b>: only one thread in the critical section</li>
          <li><b>Progress</b>: if no one inside, someone trying must enter in finite time</li>
          <li><b>Bounded Waiting</b>: entry wait is bounded</li>
        </ul>
      </section>

      <section>
        <h2>Peterson?s Algorithm (2 threads)</h2>
        <p>
          Two flags and a turn. Each thread raises its flag, yields turn to the other, and waits while the other
          is interested and it is the other?s turn. Satisfies mutual exclusion and bounded waiting on sequentially
          consistent memory.
        </p>
      </section>

      <section>
        <h2>Semaphores</h2>
        <ul>
          <li><b>Binary</b>: mutex lock/unlock</li>
          <li><b>Counting</b>: resource slots; P(wait) decrements, V(signal) increments</li>
        </ul>
        <p>Discipline: always P before critical region, V after; same order across code paths to avoid deadlock.</p>
      </section>

      <section>
        <h2>Readers?Writers (first readers-preference)</h2>
        <p>Idea: many readers can enter together; writers need exclusive access.</p>
        <ul>
          <li>State: <i>readCount</i>, mutex for readCount, and <i>rwMutex</i> for the resource.</li>
          <li>First reader locks <i>rwMutex</i>; last reader releases it. Writer P on <i>rwMutex</i> exclusively.</li>
        </ul>
        <p>Starvation caution: writers can starve; use writer-preference or fair queue to balance.</p>
      </section>

      <section>
        <h2>Producer?Consumer (bounded buffer)</h2>
        <ul>
          <li>Semaphores: <b>empty</b>=N, <b>full</b>=0, <b>mutex</b>=1</li>
          <li>Producer: wait(empty); wait(mutex); put; signal(mutex); signal(full)</li>
          <li>Consumer: wait(full); wait(mutex); get; signal(mutex); signal(empty)</li>
        </ul>
      </section>

      <section>
        <h2>Monitors</h2>
        <p>Language-level construct with a single implicit lock and condition variables for wait/signal ? safer than
          manual semaphore choreography, easier to reason about invariants.</p>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Define your invariant before you write code.</li>
          <li>One lock guards one invariant; avoid lock inversion.</li>
          <li>Prefer monitors/condition variables where the language offers them.</li>
        </ul>
      </section>
    </article>
  );
}
