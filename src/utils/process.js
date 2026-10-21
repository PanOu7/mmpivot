export function groupByProcess(files) {
  const grouped = {};

  files.forEach((file) => {
    if (!grouped[file.process_id]) {
      grouped[file.process_id] = {
        process_title: file.process_title,
        files: [],
      };
    }
    grouped[file.process_id].files.push(file);
  });

  return Object.entries(grouped).map(([process_id, group]) => ({
    process_id: Number(process_id),
    process_title: group.process_title,
    files: group.files,
  }));
}
