export const metadata = {
  title: 'CPU Scheduling | The Typewriter OS Compendium',
  description: 'CPU scheduling algorithms with visuals and solved GATE-style numericals.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="sched-title">
      <header>
        <h1 id="sched-title">CPU Scheduling ? Fairness, Throughput, and the Clock on the Wall</h1>
        <p className="muted">Mental picture: a single-lane typewriter carriage. Every job wants its turn at the print head.</p>
      </header>

      <section>
        <h2>Core Metrics</h2>
        <ul>
          <li><b>Completion Time (C)</b>: clock time when a process finishes</li>
          <li><b>Turnaround Time (T)</b>: T = C ? Arrival</li>
          <li><b>Waiting Time (W)</b>: W = T ? Burst</li>
          <li><b>Response Time (R)</b>: first-start time ? Arrival</li>
        </ul>
      </section>

      <section>
        <h2>Algorithms at a Glance</h2>
        <ul>
          <li><b>FCFS</b>: queue by arrival; convoy effect can hurt short jobs.</li>
          <li><b>SJF</b> (non-preemptive): always run the shortest available next; optimal average W if arrivals known.</li>
          <li><b>SRTF</b> (preemptive SJF): if a new job is shorter than remaining time, preempt.</li>
          <li><b>Round Robin (RR)</b>: time quantum q; fairness rises, context switches add overhead.</li>
          <li><b>Priority</b>: lower number = higher priority (by convention). With aging to avoid starvation.</li>
        </ul>
      </section>

      <section>
        <h2>Timeline Sketch You Can Draw</h2>
        <p>
          Draw a horizontal ruler for time. Each process is a block with its burst length. For RR, split blocks into
          slices of size q. For SRTF, cut blocks when a shorter job arrives. Label C, then compute T, W, R.
        </p>
      </section>

      <section>
        <h2>Worked Numerical 1 ? FCFS</h2>
        <p>
          Jobs: P1(A=0,B=7), P2(2,4), P3(4,1). FCFS order by arrival: P1 ? P2 ? P3.
        </p>
        <ul>
          <li>P1: C=7, T=7?0=7, W=7?7=0, R=0</li>
          <li>P2: starts at 7, C=11, T=11?2=9, W=9?4=5, R=7?2=5</li>
          <li>P3: starts at 11, C=12, T=12?4=8, W=8?1=7, R=11?4=7</li>
        </ul>
        <p><b>Avg W</b> = (0+5+7)/3 = 4.0, <b>Avg T</b> = (7+9+8)/3 = 8.0</p>
      </section>

      <section>
        <h2>Worked Numerical 2 ? SJF (Non-preemptive)</h2>
        <p>Jobs: P1(0,7), P2(2,4), P3(4,1).</p>
        <ul>
          <li>t=0: only P1 ? run P1 until 7</li>
          <li>t=7: available P2(4), P3(1) ? pick P3 (shortest), finishes at 8</li>
          <li>t=8: run P2, finishes at 12</li>
        </ul>
        <ul>
          <li>P1: C=7, T=7, W=0</li>
          <li>P3: C=8, T=8?4=4, W=4?1=3</li>
          <li>P2: C=12, T=12?2=10, W=10?4=6</li>
        </ul>
        <p><b>Avg W</b> = (0+3+6)/3 = 3.0</p>
      </section>

      <section>
        <h2>Worked Numerical 3 ? SRTF (Preemptive)</h2>
        <p>Jobs: P1(0,8), P2(1,4), P3(2,2).</p>
        <p>
          t=0?1: P1(remaining 7); t=1: P2 arrives (4) ? preempt because 4&lt;7. t=1?2: P2(3). t=2: P3(2) arrives ? preempt
          because 2&lt;3. Run P3 to t=4. Then P2 resumes to t=6. Then P1 to finish at t=14.
        </p>
        <ul>
          <li>P3: C=4, T=4?2=2, W=0</li>
          <li>P2: C=6, T=6?1=5, W=5?4=1</li>
          <li>P1: C=14, T=14?0=14, W=14?8=6</li>
        </ul>
        <p><b>Avg W</b> = (0+1+6)/3 = 2.33</p>
      </section>

      <section>
        <h2>Worked Numerical 4 ? Round Robin</h2>
        <p>Jobs: P1(0,5), P2(1,4), P3(2,2), quantum q=2, ignore context cost.</p>
        <p>Sequence: P1[0?2], P2[2?4], P3[4?6], P1[6?8], P2[8?10], P1[10?11]. Completion: P3=6, P2=10, P1=11.</p>
        <ul>
          <li>P1: T=11?0=11, W=11?5=6</li>
          <li>P2: T=10?1=9, W=9?4=5</li>
          <li>P3: T=6?2=4, W=4?2=2</li>
        </ul>
        <p><b>Avg W</b> = (6+5+2)/3 = 4.33</p>
      </section>

      <section>
        <h2>Takeaways</h2>
        <ul>
          <li>SJF/SRTF minimize average waiting (when you know bursts or can predict).</li>
          <li>RR improves fairness; pick q near typical CPU burst for balance.</li>
          <li>Priority needs aging to prevent starvation.</li>
        </ul>
      </section>
    </article>
  );
}
