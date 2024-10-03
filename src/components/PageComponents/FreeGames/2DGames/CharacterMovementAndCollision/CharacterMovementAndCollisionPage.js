import CharacterMovement from "@/components/GameComponents/2DGameComponents/CharacterMovement/CharacterMovement";
import React from "react";

function CharacterMovementAndCollisionPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <CharacterMovement />
    </div>
  );
}

export default CharacterMovementAndCollisionPage;
