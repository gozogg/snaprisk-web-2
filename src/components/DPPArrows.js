// PropertyProfileDiagram.jsx
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NODES = [
    { id: 'snapcat',    label: 'SnapCAT',      path: '/solutions/snapcat',  icon: '/img/solutionLogos/snapcat.png',   angle: -90              }, // top
    { id: 'snapcope',   label: 'SnapCOPE',     path: '/solutions/snapcope',   icon: '/img/solutionLogos/snapcope.png',  angle: -90 + 51.4       },
    { id: 'snapalert',  label: 'SnapALERT',    path: '/solutions/snapalert',   icon: '/img/solutionLogos/snapalert.png', angle: -90 + 51.4 * 2   },
    { id: 'snapvalues', label: 'SnapVALUES',   path: '/solutions/snapvalues',  icon: '/img/solutionLogos/snapvalues.png', angle: -90 + 51.4 * 3   },
    { id: 'eaudit',     label: 'Self E-AUDIT', path: '/solutions/self-e-audit', icon: '/img/solutionLogos/snapeaudit.png', angle: -90 + 51.4 * 4   },
    { id: 'snaprec',    label: 'SnapREC',      path: '/solutions/snaprec',     icon: '/img/solutionLogos/snaprec.png', angle: -90 + 51.4 * 5   },
    { id: 'snapir',    label: 'SnapIR',     path: '/solutions/snapir',   icon: '/img/solutionLogos/snapir_.png', angle: -90 + 51.4 * 6   }, // 👈 add yours
  ];

const RADIUS = 150; // distance from center to each node
const CX = 250;     // SVG center x
const CY = 250;     // SVG center y

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

export default function DPPArrows({ className = '' }) {
  const navigate = useNavigate();

  return (
    <svg
      viewBox="0 0 500 500"
      className={`block h-auto w-full max-w-full ${className}`.trim()}
      aria-label="Digital Property Profile hub diagram"
    >
      {/* Arrow marker */}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#8B4CAB" />
        </marker>
      </defs>

      {/* Lines from each node to center hub */}
      {NODES.map((node) => {
        const nx = CX + RADIUS * Math.cos(toRad(node.angle));
        const ny = CY + RADIUS * Math.sin(toRad(node.angle));
        // Shorten line so it ends at hub border (~42px radius)
        const dx = CX - nx;
        const dy = CY - ny;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ex = CX - (dx / dist) * 42;
        const ey = CY - (dy / dist) * 42;
        // Start line at node edge (~36px radius)
        const sx = nx + (dx / dist) * 36;
        const sy = ny + (dy / dist) * 36;
        return (
          <line
            key={node.id}
            x1={sx} y1={sy}
            x2={ex} y2={ey}
            stroke="#8B4CAB"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />
        );
      })}

      {/* Center hub */}
      <circle cx={CX} cy={CY} r={42} fill="#D9D9D9" stroke="#8B4CAB" strokeWidth="1.5" />
        <image
        href="/img/solutionLogos/dpp.png"
        x={CX - 35}
        y={CY - 35}
        width={70}
        height={70}
        />

      {/* Outer nodes */}
      {NODES.map((node) => {
        const nx = CX + RADIUS * Math.cos(toRad(node.angle));
        const ny = CY + RADIUS * Math.sin(toRad(node.angle));
        return (
        <Link to={node.path}>
                  <g
            key={node.id}
            style={{ cursor: 'pointer' }}
            role="link"
            aria-label={node.label}
          >
            <circle
              cx={nx} cy={ny} r={36}
              fill="#D9D9D9"
              stroke="#8B4CAB"
              strokeWidth="1.5"
            />
              {/* Icon centered on the node */}
            <image
                href={node.icon}
                x={nx - 35}
                y={ny - 35}
                width={70}
                height={70}
            />
            {/* Replace contents here with your own icon SVG paths */}
            {/* <text
              x={nx}
              y={ny + 4}
              textAnchor="middle"
              fontSize={10}
              fontWeight={500}
              fill="#3C3489"
            >
              {node.label}
            </text> */}
          </g>
        </Link>
        );
      })}
    </svg>
  );
}