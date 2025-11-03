export const metadata = {
  title: 'File Systems | The Typewriter OS Compendium',
  description: 'Allocation strategies, directories, and indexing intuition in plain English.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="fs-title">
      <header>
        <h1 id="fs-title">File Systems ? How Bytes Find a Home</h1>
        <p className="muted">Mental picture: an editor?s cabinet: folders (directories) and cross-reference cards (indexes).</p>
      </header>

      <section>
        <h2>Allocation Strategies</h2>
        <ul>
          <li><b>Contiguous</b>: fast sequential access; external fragmentation; growth hurts.</li>
          <li><b>Linked</b>: flexible growth; poor random access; needs FAT-like table for speed.</li>
          <li><b>Indexed</b>: an index block lists all data block addresses; good random access.</li>
        </ul>
      </section>

      <section>
        <h2>Directories</h2>
        <ul>
          <li>Single-level: trivial, unusable for many files.</li>
          <li>Two-level (per user): better, still rigid.</li>
          <li>Tree-structured: practical standard; absolute and relative paths; hard links vs soft links.</li>
        </ul>
      </section>

      <section>
        <h2>Indexing Intuition</h2>
        <p>
          Many systems use multi-level indexing (e.g., inode with direct, single-indirect, double-indirect). The tree
          grows only as needed, keeping metadata small for small files and scalable for large ones. B-trees index
          directories for fast lookup, stable under inserts/deletes.
        </p>
      </section>

      <section>
        <h2>Reliability Notes</h2>
        <ul>
          <li>Write-ahead logging (journaling) to keep metadata consistent.</li>
          <li>Copy-on-write for crash-consistent trees (e.g., ZFS, btrfs).</li>
          <li>Checksums end-to-end to detect silent corruption.</li>
        </ul>
      </section>
    </article>
  );
}
