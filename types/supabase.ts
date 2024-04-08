export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          address: string | null
          amount: number | null
          created_at: string
          dailyAllowanceRate: number | null
          id: number
          index: number | null
          root_id: number | null
        }
        Insert: {
          address?: string | null
          amount?: number | null
          created_at?: string
          dailyAllowanceRate?: number | null
          id?: number
          index?: number | null
          root_id?: number | null
        }
        Update: {
          address?: string | null
          amount?: number | null
          created_at?: string
          dailyAllowanceRate?: number | null
          id?: number
          index?: number | null
          root_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_addresses_root_id_fkey"
            columns: ["root_id"]
            isOneToOne: false
            referencedRelation: "roots"
            referencedColumns: ["id"]
          },
        ]
      }
      angry_list: {
        Row: {
          address: string | null
          created_at: string
          id: number
          signature: string | null
          solana_address: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: number
          signature?: string | null
          solana_address?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: number
          signature?: string | null
          solana_address?: string | null
        }
        Relationships: []
      }
      angry_wl: {
        Row: {
          address: string
        }
        Insert: {
          address: string
        }
        Update: {
          address?: string
        }
        Relationships: []
      }
      badges: {
        Row: {
          address_id: number | null
          allocation: number | null
          created_at: string
          id: number
          name: string | null
          numHeld: number | null
        }
        Insert: {
          address_id?: number | null
          allocation?: number | null
          created_at?: string
          id?: number
          name?: string | null
          numHeld?: number | null
        }
        Update: {
          address_id?: number | null
          allocation?: number | null
          created_at?: string
          id?: number
          name?: string | null
          numHeld?: number | null
        }
        Relationships: []
      }
      badges_holders: {
        Row: {
          address: string
          amount: string
          tokenid: string
        }
        Insert: {
          address: string
          amount: string
          tokenid: string
        }
        Update: {
          address?: string
          amount?: string
          tokenid?: string
        }
        Relationships: []
      }
      badges_miss_fix: {
        Row: {
          address: string
          amounts: string
          tokenids: string
        }
        Insert: {
          address: string
          amounts: string
          tokenids: string
        }
        Update: {
          address?: string
          amounts?: string
          tokenids?: string
        }
        Relationships: []
      }
      badges_snapshot: {
        Row: {
          address: string
          allocations: string
          amounts: string
          index: string
          proof: string
          tokenids: string
        }
        Insert: {
          address: string
          allocations: string
          amounts: string
          index: string
          proof: string
          tokenids: string
        }
        Update: {
          address?: string
          allocations?: string
          amounts?: string
          index?: string
          proof?: string
          tokenids?: string
        }
        Relationships: []
      }
      badges_snapshot_20240307: {
        Row: {
          address: string | null
          allocations: string | null
          amounts: string | null
          index: string | null
          proof: string | null
          tokenids: string | null
        }
        Insert: {
          address?: string | null
          allocations?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Update: {
          address?: string | null
          allocations?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Relationships: []
      }
      badges_snapshot_backup: {
        Row: {
          address: string | null
          allocations: string | null
          amounts: string | null
          index: string | null
          proof: string | null
          tokenids: string | null
        }
        Insert: {
          address?: string | null
          allocations?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Update: {
          address?: string | null
          allocations?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Relationships: []
      }
      badges_snapshot_week3: {
        Row: {
          address: string
          amounts: string
          index: string
          proof: string
          tokenids: string
        }
        Insert: {
          address: string
          amounts: string
          index: string
          proof: string
          tokenids: string
        }
        Update: {
          address?: string
          amounts?: string
          index?: string
          proof?: string
          tokenids?: string
        }
        Relationships: []
      }
      badges_snapshot_week3_part: {
        Row: {
          address: string | null
          amounts: string | null
          index: string | null
          proof: string | null
          tokenids: string | null
        }
        Insert: {
          address?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Update: {
          address?: string | null
          amounts?: string | null
          index?: string | null
          proof?: string | null
          tokenids?: string | null
        }
        Relationships: []
      }
      badges_type: {
        Row: {
          announce_url: string | null
          comment: string | null
          id: string
          name: string
        }
        Insert: {
          announce_url?: string | null
          comment?: string | null
          id: string
          name: string
        }
        Update: {
          announce_url?: string | null
          comment?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      dict: {
        Row: {
          create_at: string | null
          create_by: string | null
          desc: string | null
          key: string
          kind: string
          value: string | null
        }
        Insert: {
          create_at?: string | null
          create_by?: string | null
          desc?: string | null
          key: string
          kind: string
          value?: string | null
        }
        Update: {
          create_at?: string | null
          create_by?: string | null
          desc?: string | null
          key?: string
          kind?: string
          value?: string | null
        }
        Relationships: []
      }
      dumplicate_address: {
        Row: {
          address: string | null
          cc: number | null
        }
        Insert: {
          address?: string | null
          cc?: number | null
        }
        Update: {
          address?: string | null
          cc?: number | null
        }
        Relationships: []
      }
      farcaster_questers: {
        Row: {
          address: string | null
          created_at: string
          farcaster_id: number | null
          id: number
          quest_name: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          farcaster_id?: number | null
          id?: number
          quest_name?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          farcaster_id?: number | null
          id?: number
          quest_name?: string | null
        }
        Relationships: []
      }
      faucet_snapshot: {
        Row: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Insert: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Update: {
          address?: string
          amount?: string
          index?: string
          proof?: string
        }
        Relationships: []
      }
      fren_snapshot: {
        Row: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Insert: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Update: {
          address?: string
          amount?: string
          index?: string
          proof?: string
        }
        Relationships: []
      }
      fren_test: {
        Row: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Insert: {
          address: string
          amount: string
          index: string
          proof: string
        }
        Update: {
          address?: string
          amount?: string
          index?: string
          proof?: string
        }
        Relationships: []
      }
      hc_snapshot_raffle: {
        Row: {
          balance: number
          wallet: string
        }
        Insert: {
          balance: number
          wallet: string
        }
        Update: {
          balance?: number
          wallet?: string
        }
        Relationships: []
      }
      henlo_holders: {
        Row: {
          address: string
          amount: number | null
          tokenid: string
        }
        Insert: {
          address: string
          amount?: number | null
          tokenid: string
        }
        Update: {
          address?: string
          amount?: number | null
          tokenid?: string
        }
        Relationships: []
      }
      hungrybera_holders: {
        Row: {
          address: string
          created_at: string
        }
        Insert: {
          address: string
          created_at?: string
        }
        Update: {
          address?: string
          created_at?: string
        }
        Relationships: []
      }
      live_sessions: {
        Row: {
          address: string
          created_at: string
          id: number
          is_active: boolean
          last_active: string | null
        }
        Insert: {
          address: string
          created_at?: string
          id?: number
          is_active?: boolean
          last_active?: string | null
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          is_active?: boolean
          last_active?: string | null
        }
        Relationships: []
      }
      missed_badges_type: {
        Row: {
          address: string
          amount: string | null
          tokenid: string
        }
        Insert: {
          address: string
          amount?: string | null
          tokenid: string
        }
        Update: {
          address?: string
          amount?: string | null
          tokenid?: string
        }
        Relationships: []
      }
      missed_badges_type_20240306: {
        Row: {
          address: string | null
          amount: string | null
          tokenid: string | null
        }
        Insert: {
          address?: string | null
          amount?: string | null
          tokenid?: string | null
        }
        Update: {
          address?: string | null
          amount?: string | null
          tokenid?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string
          created_at: string
          id: number
          referral_code: string | null
          twitter: string | null
          username: string | null
        }
        Insert: {
          address: string
          created_at?: string
          id?: number
          referral_code?: string | null
          twitter?: string | null
          username?: string | null
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          referral_code?: string | null
          twitter?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_referral_code_fkey"
            columns: ["referral_code"]
            isOneToOne: true
            referencedRelation: "referral_codes"
            referencedColumns: ["code"]
          },
        ]
      }
      proof_root: {
        Row: {
          comment: string | null
          create_at: string
          created_by: string
          encode_values: string
          root: string
          tree: string
        }
        Insert: {
          comment?: string | null
          create_at?: string
          created_by: string
          encode_values: string
          root: string
          tree: string
        }
        Update: {
          comment?: string | null
          create_at?: string
          created_by?: string
          encode_values?: string
          root?: string
          tree?: string
        }
        Relationships: []
      }
      quests: {
        Row: {
          admins: string | null
          created_at: string
          description: string
          disabled: boolean | null
          endTime: number
          farcasterSteps: Json[] | null
          id: number
          image: string
          link: string | null
          logo: string | null
          partnerName: string | null
          prerequisites: string | null
          reward: number
          slug: string
          startTime: number
          steps: Json[] | null
          title: string
          type: string
        }
        Insert: {
          admins?: string | null
          created_at?: string
          description: string
          disabled?: boolean | null
          endTime: number
          farcasterSteps?: Json[] | null
          id?: number
          image: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          prerequisites?: string | null
          reward: number
          slug: string
          startTime: number
          steps?: Json[] | null
          title: string
          type?: string
        }
        Update: {
          admins?: string | null
          created_at?: string
          description?: string
          disabled?: boolean | null
          endTime?: number
          farcasterSteps?: Json[] | null
          id?: number
          image?: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          prerequisites?: string | null
          reward?: number
          slug?: string
          startTime?: number
          steps?: Json[] | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      quests_duplicate: {
        Row: {
          admins: string | null
          created_at: string
          description: string
          disabled: boolean | null
          endTime: number
          farcasterSteps: Json[] | null
          id: number
          image: string
          link: string | null
          logo: string | null
          partnerName: string | null
          prerequisites: string | null
          reward: number
          slug: string
          startTime: number
          steps: Json[] | null
          title: string
          type: string
        }
        Insert: {
          admins?: string | null
          created_at?: string
          description: string
          disabled?: boolean | null
          endTime: number
          farcasterSteps?: Json[] | null
          id?: number
          image: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          prerequisites?: string | null
          reward: number
          slug: string
          startTime: number
          steps?: Json[] | null
          title: string
          type?: string
        }
        Update: {
          admins?: string | null
          created_at?: string
          description?: string
          disabled?: boolean | null
          endTime?: number
          farcasterSteps?: Json[] | null
          id?: number
          image?: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          prerequisites?: string | null
          reward?: number
          slug?: string
          startTime?: number
          steps?: Json[] | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      quests_test: {
        Row: {
          admins: string | null
          created_at: string
          description: string
          disabled: boolean | null
          endTime: number
          farcasterSteps: Json[] | null
          id: number
          image: string
          link: string | null
          logo: string | null
          partnerName: string | null
          reward: number
          slug: string
          startTime: number
          steps: Json[] | null
          title: string
          type: string
        }
        Insert: {
          admins?: string | null
          created_at?: string
          description: string
          disabled?: boolean | null
          endTime: number
          farcasterSteps?: Json[] | null
          id?: number
          image: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          reward: number
          slug: string
          startTime: number
          steps?: Json[] | null
          title: string
          type?: string
        }
        Update: {
          admins?: string | null
          created_at?: string
          description?: string
          disabled?: boolean | null
          endTime?: number
          farcasterSteps?: Json[] | null
          id?: number
          image?: string
          link?: string | null
          logo?: string | null
          partnerName?: string | null
          reward?: number
          slug?: string
          startTime?: number
          steps?: Json[] | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      raffles: {
        Row: {
          address: string
          created_at: string
          id: number
          num_tickets: number
          raffle_name: string
          signature: string | null
        }
        Insert: {
          address: string
          created_at?: string
          id?: number
          num_tickets: number
          raffle_name: string
          signature?: string | null
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          num_tickets?: number
          raffle_name?: string
          signature?: string | null
        }
        Relationships: []
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          id: number
          user_address: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: number
          user_address: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: number
          user_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_referral_codes_user_address_fkey"
            columns: ["user_address"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["address"]
          },
        ]
      }
      referrals: {
        Row: {
          created_at: string
          id: number
          referee_user_address: string | null
          referral_code: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          referee_user_address?: string | null
          referral_code?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          referee_user_address?: string | null
          referral_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_referrals_referral_code_fkey"
            columns: ["referral_code"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["code"]
          },
        ]
      }
      roots: {
        Row: {
          created_at: string
          id: number
          root_hash: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          root_hash?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          root_hash?: string | null
        }
        Relationships: []
      }
      solana_nft_snapshot: {
        Row: {
          address: string
        }
        Insert: {
          address: string
        }
        Update: {
          address?: string
        }
        Relationships: []
      }
      tmp_double_address: {
        Row: {
          address: string | null
          created_at: string | null
          id: number | null
          row_num: number | null
          signature: string | null
          solana_address: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id?: number | null
          row_num?: number | null
          signature?: string | null
          solana_address?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: number | null
          row_num?: number | null
          signature?: string | null
          solana_address?: string | null
        }
        Relationships: []
      }
      tmp_twitter_quests: {
        Row: {
          address: string | null
        }
        Insert: {
          address?: string | null
        }
        Update: {
          address?: string | null
        }
        Relationships: []
      }
      tmp_week3_quest: {
        Row: {
          address: string | null
          amount: number | null
          tokenid: string | null
        }
        Insert: {
          address?: string | null
          amount?: number | null
          tokenid?: string | null
        }
        Update: {
          address?: string | null
          amount?: number | null
          tokenid?: string | null
        }
        Relationships: []
      }
      twitter_questers: {
        Row: {
          address: string | null
          created_at: string
          id: number
          quest_name: string | null
          twitter_id: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: number
          quest_name?: string | null
          twitter_id?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: number
          quest_name?: string | null
          twitter_id?: string | null
        }
        Relationships: []
      }
      wallets_claim_tbera: {
        Row: {
          wallets: string
        }
        Insert: {
          wallets: string
        }
        Update: {
          wallets?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_total_participants_for_farcaster_quest: {
        Args: {
          quest_name_param: string
        }
        Returns: number
      }
      get_total_participants_for_twitter_quest: {
        Args: {
          quest_name_param: string
        }
        Returns: number
      }
      get_total_tickets: {
        Args: {
          arg: string
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
