export function getPackageType(package_name) {
  const ext = package_name.substring(package_name.lastIndexOf(".") + 1).toLowerCase()

  if (ext === "appimage") return "AppImage"
  else if (ext === "gz") return "Tarball"
  else if (ext === "zip") return "ZIP"
  else if (ext === "exe") return "Installer"
  else return "Binary"
}
