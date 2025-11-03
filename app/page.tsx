export const metadata = {
  title: 'Home | The Typewriter OS Compendium',
  description: 'A stark, typewriter-aesthetic guide to OS algorithms for GATE with stories, visuals, and solved numericals.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="home-title">
      <header>
        <h1 id="home-title">Operating Systems, Explained Like a Calm Newsroom</h1>
        <p className="muted">Black ink. White page. Every claim traced. Every formula demystified.</p>
      </header>

      <section>
        <p>
          This is a minimalist field guide to Operating Systems algorithms for GATE: factual, historically grounded,
          and written in plain C1 English. The vibe is a quiet newsroom: crisp sentences, zero fluff, and the
          unpolished charm of a typewriter rolling across aged paper.
        </p>
        <div className="rule" />
        <p>
          Read it straight through, or jump to a topic. Each section includes crisp explanations, mental models,
          visual cues you can sketch in the margin, and worked numericals with solutions you can audit line by line.
        </p>
      </section>

      <section>
        <h2>What You?ll Master</h2>
        <ul>
          <li>CPU Scheduling: FCFS, SJF/SRTF, RR, Priority ? with response/turnaround/waiting time numericals</li>
          <li>Synchronization: critical section, Peterson, semaphores, monitors, Readers?Writers</li>
          <li>Deadlocks: detection, prevention, Banker?s algorithm ? safety checks by hand</li>
          <li>Memory: paging, TLB, effective access time, page replacement (FIFO, LRU, Optimal, LFU)</li>
          <li>Disk Scheduling: FCFS, SSTF, SCAN/CSCAN, LOOK/CLOOK ? total head movement</li>
          <li>File Systems: allocation strategies, directory structures, indexing intuition</li>
        </ul>
      </section>

      <section>
        <h2>How to Read This</h2>
        <ul>
          <li><b>Talk like a human</b>: We keep it conversational, but exact.</li>
          <li><b>Sketch the scene</b>: Jot the tiny visual beside each algorithm; it sticks.</li>
          <li><b>Work the numbers</b>: Do the examples without peeking, then audit.</li>
        </ul>
      </section>

      <footer>
        <p className="muted">Pick a doorway from the nav above. The pages slide like a carriage return.</p>
      </footer>
    </article>
  );
}
