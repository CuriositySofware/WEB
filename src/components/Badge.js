import React from "react";

export default function Badge({ variant = "pending" }) {
  const status = {
    pending: "Pendiente",
    success: "Aprobada",
    declined: "Rechazada",
  };
  return <div className={`badge badge--${variant}`}>{status[variant]}</div>;
}
