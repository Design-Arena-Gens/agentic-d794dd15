export const metadata = {
  title: 'Disk Scheduling | The Typewriter OS Compendium',
  description: 'FCFS, SSTF, SCAN, CSCAN, LOOK, CLOOK ? with total head movement numericals.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="disk-title">
      <header>
        <h1 id="disk-title">Disk Scheduling ? Drawing Clean Lines Across Tracks</h1>
        <p className="muted">Mental picture: a carriage sweeping across a vinyl record, picking requests in order.</p>
      </header>

      <section>
        <h2>The Cast</h2>
        <ul>
          <li><b>FCFS</b>: serve in arrival order; simple, can be long.</li>
          <li><b>SSTF</b>: nearest neighbor next; reduces movement, may starve far requests.</li>
          <li><b>SCAN</b> (Elevator): move in one direction servicing; reverse at end.</li>
          <li><b>CSCAN</b>: like SCAN but jump to start without servicing on return.</li>
          <li><b>LOOK/CLOOK</b>: like SCAN/CSCAN but turn at last request, not boundary.</li>
        </ul>
      </section>

      <section>
        <h2>Worked Numerical ? Total Head Movement (LOOK)</h2>
        <p>Requests: 98, 183, 37, 122, 14, 124, 65, 67; head at 53; direction upward.</p>
        <p>Ascending side: 65, 67, 98, 122, 124, 183; Descending after turn: 37, 14.</p>
        <p>Movement: |53?65|=12, |65?67|=2, |67?98|=31, |98?122|=24, |122?124|=2, |124?183|=59, turn, |183?37|=146, |37?14|=23 ? total = 299.</p>
      </section>

      <section>
        <h2>When to Use What</h2>
        <ul>
          <li>Heavy, uniform load: SCAN/LOOK smooths variance.</li>
          <li>Latency-sensitive near the head: SSTF, but watch starvation.</li>
          <li>Fairness across the platter: CSCAN/CLOOK.</li>
        </ul>
      </section>
    </article>
  );
}
