"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Hash, Mic, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}
const iconMap = {
  [ChannelType.TEXT]: Hash,
  [ChannelType.AUDIO]: Mic,
  [ChannelType.VIDEO]: Video,
};

export const ServerChannel = ({
  channel,
  server,
  role,
}: ServerChannelProps) => {
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[channel.type];

  return (
    <button
      className={cn(
        "hover:bg-zing-700/10 group  mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-2 transition dark:hover:bg-zinc-700/50",
        params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700",
      )}
      onClick={() => {}}
    >
      <Icon className="h-5 w-5  flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
      <p
        className={cn(
          "line-clamp-1 text-sm font-semibold text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300",
          params?.channelId === channel.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white",
        )}
      >
        {channel.name}
      </p>
    </button>
  );
};
